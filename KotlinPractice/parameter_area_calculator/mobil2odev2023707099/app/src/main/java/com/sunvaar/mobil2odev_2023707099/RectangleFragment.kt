package com.sunvaar.mobil2odev_2023707099

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class RectangleFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_rectangle, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        view.findViewById<Button>(R.id.calculate_rectangle_button).setOnClickListener {

            val rectangleLongSide = view.findViewById<EditText>(R.id.rectangle_longside_input).text.toString().toFloatOrNull()
            val rectangleShortSide = view.findViewById<EditText>(R.id.rectangle_shortside_input).text.toString().toFloatOrNull()

            if (rectangleLongSide == null || rectangleShortSide == null)
            {
                Toast.makeText(requireContext(), "Sayı girmedin", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            if (rectangleLongSide <= 0 || rectangleShortSide <= 0)
            {
                Toast.makeText(requireContext(), "Pozitif sayı girmedin", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            if (rectangleLongSide <= rectangleShortSide)
            {
                Toast.makeText(requireContext(), "Uzun kenar kısa kenardan uzun değil", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            val rectanglePerimeterResult = ((rectangleShortSide + rectangleLongSide) * 2).toString()
            view.findViewById<EditText>(R.id.rectangle_perimeter_result).setText(rectanglePerimeterResult)

            val rectangleAreaResult = (rectangleShortSide * rectangleLongSide).toString()
            view.findViewById<EditText>(R.id.rectangle_area_result).setText(rectangleAreaResult)
        }
    }
}