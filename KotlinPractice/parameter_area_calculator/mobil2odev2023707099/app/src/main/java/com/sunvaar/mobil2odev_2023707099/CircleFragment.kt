package com.sunvaar.mobil2odev_2023707099

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class CircleFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_circle, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        view.findViewById<Button>(R.id.calculate_circle_button).setOnClickListener {

            val circleRadius = view.findViewById<EditText>(R.id.circle_radius_input).text.toString().toFloatOrNull()

            if (circleRadius == null)
            {
                Toast.makeText(requireContext(), "Sayı girmedin", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            if (circleRadius <= 0)
            {
                Toast.makeText(requireContext(), "Pozitif sayı girmedin", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            val circlePerimeterResult = (2 * Math.PI.toFloat() * circleRadius).toString()
            view.findViewById<EditText>(R.id.circle_perimeter_result).setText(circlePerimeterResult)

            val circleAreaResult = (Math.PI.toFloat() * circleRadius * circleRadius).toString()
            view.findViewById<EditText>(R.id.circle_area_result).setText(circleAreaResult)
        }
    }
}