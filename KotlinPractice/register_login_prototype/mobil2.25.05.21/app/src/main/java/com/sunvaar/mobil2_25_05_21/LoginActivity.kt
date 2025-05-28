package com.sunvaar.mobil2_25_05_21

import android.content.Intent
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper
import android.os.Bundle
import android.provider.Telephony.Mms.Intents
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.sunvaar.mobil2_25_05_21.databinding.ActivityLoginBinding

// build.gradle.kts de buildFeatures metodunda viewBinding = true yap
private lateinit var binding: ActivityLoginBinding

class LoginActivity : AppCompatActivity() {

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

        // binding initializing
        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)
        // setContentView(R.layout.activity_login)

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        binding.loginSubmitButton.setOnClickListener {
            PerformLogin()
        }

        binding.registerButton.setOnClickListener {
            val intent = Intent(this, RegisterActivity::class.java)
            startActivity(intent)
        }
    }

    fun PerformLogin()
    {
        val emailText = binding.loginEmail.text.toString().trim()
        val passwordText = binding.loginPassword.text.toString().trim()

        // database control
        val db = dbHelper.readableDatabase
        val cursor = db.rawQuery("SELECT * FROM users where email = ?", arrayOf(emailText))

        if (cursor.count == 0) {
            Toast.makeText(this, "This account doesn't exist", Toast.LENGTH_SHORT).show()
            return
        }
        cursor.moveToFirst()
        val storedPassword = cursor.getString(cursor.getColumnIndexOrThrow("password"))
        if (! storedPassword.equals(passwordText))
        {
            Toast.makeText(this, "Wrong Password!", Toast.LENGTH_SHORT).show()
            return
        }

        Toast.makeText(this, "Login Successful", Toast.LENGTH_SHORT).show()
        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
        finish()
    }
}