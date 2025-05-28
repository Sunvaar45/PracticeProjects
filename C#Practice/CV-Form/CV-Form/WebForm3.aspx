<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="WebForm3.aspx.cs" Inherits="CV_Form.WebForm3" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1 class="MainHeader">Eğitim Bilgileri</h1>
    <div class="TableContainer">
        <table cellspacing="0" cellpadding="10px" border="1">
            <tr class="HeaderRow">
                <td>&nbsp;<label>Ülke</label></td>
                <td>&nbsp;<label>Üniversite</label></td>
                <td>&nbsp;<label>Eğitim Türü</label></td>
                <td>&nbsp;<label>Bölüm</label></td>
                <td>&nbsp;<label>Sınıf/Mezuniyet Durumu</label></td>
                <td>&nbsp;<label>Ortalama</label></td>
                <td>&nbsp;<label>Giriş Yılı</label></td>
            </tr>
            <tr>
                <td>&nbsp;Türkiye</td>
                <td>&nbsp;Dokuz Eylül Üniversitesi</td>
                <td>&nbsp;Ön Lisans</td>
                <td>&nbsp;Bilgisayar Programcılığı</td>
                <td>&nbsp;2</td>
                <td>&nbsp;3,14</td>
                <td>&nbsp;2023</td>
            </tr>
        </table>
    </div>
</asp:Content>
