<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="WebForm4.aspx.cs" Inherits="CV_Form.WebForm4" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1 class="MainHeader">İş Deneyimleri</h1>
    <div class="TableContainer">
        <table cellspacing="0" cellpadding="10px" border="1">
            <tr class="HeaderRow">
                <td>&nbsp;<label>Ülke</label></td>
                <td>&nbsp;<label>İşveren</label></td>
                <td>&nbsp;<label>Pozisyon</label></td>
                <td>&nbsp;<label>İşe Giriş Tarihi</label></td>
                <td>&nbsp;<label>İş Durumu</label></td>
                <td>&nbsp;<label>İşten Ayrılma Tarihi</label></td>
            </tr>
            <tr>
                <td>&nbsp;Türkiye</td>
                <td>&nbsp;Maksipan Plastik Makine Sanayi Tic. Ltd. Şti.</td>
                <td>&nbsp;Stajyer</td>
                <td>&nbsp;20/06/2022</td>
                <td>&nbsp;Devam Etmiyor</td>
                <td>&nbsp;19/08/2022</td>
            </tr>
        </table>
    </div>
</asp:Content>
