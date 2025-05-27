package com.sunvaar.mobil2odev_2023707099

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.google.android.material.tabs.TabLayout

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        supportFragmentManager.beginTransaction().replace(R.id.fragment_container, SquareFragment()).commit()

        val tabLayout = findViewById<TabLayout>(R.id.tabLayout)

        tabLayout.addOnTabSelectedListener(object: TabLayout.OnTabSelectedListener {
            override fun onTabSelected(tab: TabLayout.Tab) {
                if (tab.position == 0)
                {
                    supportFragmentManager.beginTransaction().replace(R.id.fragment_container, SquareFragment()).commit()
                }
                else if (tab.position == 1)
                {
                    supportFragmentManager.beginTransaction().replace(R.id.fragment_container, RectangleFragment()).commit()
                }
                else if (tab.position == 2)
                {
                    supportFragmentManager.beginTransaction().replace(R.id.fragment_container, CircleFragment()).commit()
                }
                else if (tab.position == 3)
                {
                    supportFragmentManager.beginTransaction().replace(R.id.fragment_container, TriangleFragment()).commit()
                }
            }

            override fun onTabUnselected(tab: TabLayout.Tab?) {}
            override fun onTabReselected(tab: TabLayout.Tab?) {}
        })
    }
}