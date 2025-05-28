using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

namespace CV_Form
{
    public partial class Site1 : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string aktifSekme = System.IO.Path.GetFileName(Request.Path); // aktif sekmenin yolunu nesneye aktar

            if (aktifSekme == "WebForm1.aspx")
            {
                AnaSayfa.Attributes["class"] = "AktifSekme";
            }
            else if (aktifSekme == "WebForm2.aspx")
            {
                KisiselBilgiler.Attributes["class"] = "AktifSekme";
            }
            else if (aktifSekme == "WebForm3.aspx")
            {
                Egitim.Attributes["class"] = "AktifSekme";
            }
            else if (aktifSekme == "WebForm4.aspx")
            {
                IsDeneyimleri.Attributes["class"] = "AktifSekme";
            }
            else if (aktifSekme == "WebForm5.aspx")
            {
                Projeler.Attributes["class"] = "AktifSekme";
            }
            else if (aktifSekme == "WebForm6.aspx")
            {
                Yetenekler.Attributes["class"] = "AktifSekme";
            }
            else if (aktifSekme == "WebForm7.aspx")
            {
                Referanslar.Attributes["class"] = "AktifSekme";
            }
            else
            {
                Bloglar.Attributes["class"] = "AktifSekme";
            }
        }
    }
}