<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="WebForm6.aspx.cs" Inherits="CV_Form.WebForm6" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1 class="MainHeader">Yetenekler</h1>
    <div class="TableContainer">
        <table cellspacing="0" cellpadding="10px" border="1">
            <tr class="HeaderRow">
                <td>&nbsp;<label>Yetenek Adı</label></td>
                <td>&nbsp;<label>Yetenek Seviyesi</label></td>
                <td>&nbsp;<label>Açıklama</label></td>
            </tr>
            <tr>
                <td>&nbsp;C# Programlama Dili</td>
                <td>&nbsp;Başlangıç</td>
                <td>&nbsp;C# ile programlamaya başladım. Algoritmik düşünme üzerine pratiklerim genelde C# kullanarak gerçekeştirdim.</td>
            </tr>
            <tr>
                <td>&nbsp;Ofis Programları</td>
                <td>&nbsp;Başlangıç</td>
                <td>&nbsp;Günlük hayatımda bilgisayarda belgeleme ihtiyacım bulunduğunda ofis programlarıyla deneyimim arttı</td>
            </tr>
        </table>
    </div>
</asp:Content>
