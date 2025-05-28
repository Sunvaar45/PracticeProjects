package com.sunvaar.mobil2_25_05_21

import android.content.Intent
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class RegisterActivity : AppCompatActivity() {

    // initialize in onCreate
    private lateinit var firstName: EditText
    private lateinit var lastName: EditText
    private lateinit var email: EditText

    // initialize before onCreate
    private val password: EditText by lazy { findViewById(R.id.password) }
    private val passwordRepeat: EditText by lazy { findViewById(R.id.password_repeat)}
    // password hint

    // database sqlite
    private lateinit var dbHelper: SQLiteOpenHelper


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        // database initialization
        dbHelper = object: SQLiteOpenHelper(this, "myDatabase.db", null, 1) {
            override fun onCreate(db: SQLiteDatabase?) {
                if (db != null)
                {
                    db.execSQL("""
                        CREATE TABLE users (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            first_name TEXT NOT NULL,
                            last_name TEXT NOT NULL,
                            email TEXT NOT NULL UNIQUE,
                            password TEXT NOT NULL
                        )
                    """.trimIndent())
                }
            }

            override fun onUpgrade(db: SQLiteDatabase?, oldVersion: Int, newVersion: Int) {

            }
        }

        setContentView(R.layout.activity_register)

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        // lateinit initializations
        firstName = findViewById(R.id.first_name)
        lastName = findViewById(R.id.last_name)
        email = findViewById(R.id.email)

        findViewById<Button>(R.id.submit_button).setOnClickListener {
            PerformLogin()
        }

        findViewById<TextView>(R.id.login_button).setOnClickListener {
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
        }
    }


    fun PerformLogin()
    {
        val firstNameText = firstName.text.toString().trim()
        if (firstNameText.isEmpty())
        {
            Toast.makeText(this,"Enter your name", Toast.LENGTH_SHORT).show()
            return
        }

        val lastNameText = lastName.text.toString().trim()
        if (lastNameText.isEmpty())
        {
            Toast.makeText(this,"Enter your last name", Toast.LENGTH_SHORT).show()
            return
        }

        val emailText = email.text.toString().trim()
        if (emailText.isEmpty())
        {
            Toast.makeText(this,"Enter your e-mail", Toast.LENGTH_SHORT).show()
            return
        }

        val passwordText = password.text.toString().trim()
        if (passwordText.isEmpty())
        {
            Toast.makeText(this,"Enter your password", Toast.LENGTH_SHORT).show()
            return
        }

        // password repeat
        val passwordRepeatText = passwordRepeat.text.toString().trim()
        if (! passwordRepeatText.equals(passwordText))
        {
            Toast.makeText(this, "Passwords don't match", Toast.LENGTH_SHORT).show()
        }

        // password hint

        // email exists?
        val dbRead = dbHelper.readableDatabase
        val cursor = dbRead.rawQuery("SELECT * FROM users WHERE email = ?", arrayOf(emailText))

        if (cursor.count > 0)
        {
            Toast.makeText(this, "This email is already registered", Toast.LENGTH_SHORT).show()
            return
        }

        // save data into database
        val db = dbHelper.writableDatabase
        db.execSQL("""
            INSERT INTO users(
                first_name, last_name, email, password
            ) 
            VALUES (
                '$firstNameText', '$lastNameText', '$emailText', '$passwordText'
            )
        """.trimIndent())
        Toast.makeText(this,"User registered (simulation)", Toast.LENGTH_SHORT).show()
    }
}