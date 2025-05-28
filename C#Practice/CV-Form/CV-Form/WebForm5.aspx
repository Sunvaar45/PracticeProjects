<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="WebForm5.aspx.cs" Inherits="CV_Form.WebForm5" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1 class="MainHeader">Projeler</h1>
    <div class="TableContainer">
        <table cellspacing="0" cellpadding="10px" border="1">
            <tr class="HeaderRow">
                <td>&nbsp;<label>Proje Adı</label></td>
                <td>&nbsp;<label>Açıklama</label></td>
                <td>&nbsp;<label>Url</label></td>
            </tr>
            <tr>
                <td>&nbsp;Forbidden-Bazaar</td>
                <td>&nbsp;Wordpress ile yaptığım ticaret oyun kartları satan e-ticaret websitesi</td>
                <td>&nbsp;<a class="Link" href="https://github.com/Sunvaar45/Forbidden-Bazaar">Proje Websitesi</a></td>
            </tr>
        </table>
    </div>
</asp:Content>
