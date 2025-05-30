package com.sunvaar.mobil2odev_2023707099

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import kotlin.math.sqrt

class TriangleFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_triangle, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        view.findViewById<Button>(R.id.calculate_triangle_button).setOnClickListener {

            val triangleSideA = view.findViewById<EditText>(R.id.triangle_side1_input).text.toString().toFloatOrNull()
            val triangleSideB = view.findViewById<EditText>(R.id.triangle_side2_input).text.toString().toFloatOrNull()
            val triangleSideC = view.findViewById<EditText>(R.id.triangle_side3_input).text.toString().toFloatOrNull()

            if (triangleSideA == null || triangleSideB == null || triangleSideC == null)
            {
                Toast.makeText(requireContext(), "Sayı girmedin", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            if (triangleSideA <= 0 || triangleSideB <= 0 || triangleSideC <= 0)
            {
                Toast.makeText(requireContext(), "Pozitif sayı girmedin", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // return if side values can't make a triangle
            if (
                triangleSideA + triangleSideB <= triangleSideC ||
                triangleSideA + triangleSideC <= triangleSideB ||
                triangleSideB + triangleSideC <= triangleSideA )
            {
                Toast.makeText(requireContext(), "Geçerli üçgen değil", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            val trianglePerimeterResult = (triangleSideA + triangleSideB + triangleSideC).toString()
            view.findViewById<EditText>(R.id.triangle_perimeter_result).setText(trianglePerimeterResult)

            val s = trianglePerimeterResult.toFloat() / 2
            val triangleAreaResult = sqrt(s * (s - triangleSideA) * (s - triangleSideB) * (s - triangleSideC)).toString()
            view.findViewById<EditText>(R.id.triangle_area_result).setText(triangleAreaResult)
        }
    }
}