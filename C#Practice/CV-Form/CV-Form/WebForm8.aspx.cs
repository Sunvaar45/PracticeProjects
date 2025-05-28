using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CV_Form
{
    public partial class WebForm8 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Page.MaintainScrollPositionOnPostBack = true;
            ListBox1.AutoPostBack = true; // metodun her tıklamada çalışması için

            // blog içeriği için uygun textbox
            TextBox2.TextMode = TextBoxMode.MultiLine;
            TextBox2.Rows = 13;
            TextBox2.Columns = 22;

            // requiredfieldvaldidator ları textboxlara bağla
            ContentPlaceHolder placeholder = (ContentPlaceHolder)Master.FindControl("ContentPlaceHolder1");
            for (int i = 1; i <= 4; i++)
            {
                TextBox textbox = (TextBox)placeholder.FindControl("TextBox" + i);
                RequiredFieldValidator bosKontrol = (RequiredFieldValidator)placeholder.FindControl("RequiredFieldValidator" + i);
                if (textbox != null & bosKontrol != null)
                {
                    bosKontrol.ControlToValidate = textbox.ID;
                    bosKontrol.Text = "Bu Alan Boş Bırakılamaz!";
                    bosKontrol.ForeColor = System.Drawing.Color.Red;
                    bosKontrol.ValidationGroup = "GonderGrup";
                }
            }

            // e posta format kontrol
            RegularExpressionValidator1.ControlToValidate = TextBox4.ID;
            RegularExpressionValidator1.Text = "Geçersiz E-posta formatı!";
            RegularExpressionValidator1.ValidationExpression = @"\w+@\w+(\.\w+)+";
            RegularExpressionValidator1.ForeColor = System.Drawing.Color.Red;
            RegularExpressionValidator1.ValidationGroup = "GonderGrup";
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            ListBoxEkle(); // formu listboxa aktar

            // formdaki verileri tabloya aktar ve formu boşalt
            ContentPlaceHolder placeholder = (ContentPlaceHolder)Master.FindControl("ContentPlaceHolder1");
            StringBuilder yeniSatir = new StringBuilder();
            yeniSatir.Append("<tr>");
            for (int i = 1; i <= 4; i++)
            {
                TextBox textbox = (TextBox)placeholder.FindControl("TextBox" + i);
                yeniSatir.Append("<td class='BlogCell'>&nbsp;" + textbox.Text.Trim() + "</td>");
                textbox.Text = ""; // textboxları temizle
            }
            yeniSatir.Append("</tr>");
            LiteralTableRows.Text += yeniSatir.ToString();
            TextBox1.Focus();
        }

        public void ListBoxEkle()
        {
            string siraVeri = $"{TextBox1.Text} | {TextBox2.Text} | {TextBox3.Text} | {TextBox4.Text}";
            ListBox1.Items.Add(siraVeri);
        }

        protected void ListBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (ListBox1.SelectedIndex >= 0)
            {
                string[] satirBilgi = ListBox1.SelectedItem.Text.Split('|' );
                TextBox1.Text = satirBilgi[0].Trim();
                TextBox2.Text = satirBilgi[1].Trim();
                TextBox3.Text = satirBilgi[2].Trim();
                TextBox4.Text = satirBilgi[3].Trim();
            }
        }

        // SİL
        protected void Button2_Click(object sender, EventArgs e)
        {
            if (ListBox1.SelectedIndex >= 0)
            {
                ListBox1.Items.RemoveAt(ListBox1.SelectedIndex);
            }
        }

        // GÜNCELLE
        protected void Button3_Click(object sender, EventArgs e)
        {
            if (ListBox1.SelectedIndex >= 0)
            {
                ListBox1.Items.RemoveAt(ListBox1.SelectedIndex);
                ListBox1.Items.Add($"{TextBox1.Text} | {TextBox2.Text} | {TextBox3.Text} | {TextBox4.Text}");
            }
        }

        // KAYDET
        protected void Button4_Click(object sender, EventArgs e)
        {
            LiteralTableRows.Text = ""; // tabloyu boşalt
            foreach (ListItem girdi in ListBox1.Items) // sıra döngü
            {
                string[] girdiBilgi = girdi.Text.Split('|');
                StringBuilder yeniSatir = new StringBuilder();

                // satır html kodunu ekle
                yeniSatir.Append("<tr>");
                foreach (var bilgi in girdiBilgi)
                {
                    yeniSatir.Append("<td class='BlogCell'>&nbsp;" + bilgi.Trim() + "</td>");
                }
                yeniSatir.Append("</tr>");

                // tabloyu tekrar doldur
                LiteralTableRows.Text += yeniSatir.ToString();
            }
            VeriEkleModu();
        }

        protected void Button5_Click(object sender, EventArgs e) // VERİ DÜZENLE
        {
            VeriDuzenlemeModu();
        }

        public void VeriDuzenlemeModu()
        {
            ListBox1.Visible = true;
            Button2.Visible = true;
            Button3.Visible = true;
            Button4.Visible = true;
            Button1.Visible = false;
        }

        public void VeriEkleModu()
        {
            ListBox1.Visible = false;
            Button2.Visible = false;
            Button3.Visible = false;
            Button4.Visible = false;
            Button1.Visible = true;
        }
    }
}