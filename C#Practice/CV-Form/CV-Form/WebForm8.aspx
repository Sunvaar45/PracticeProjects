<%@ Page Title="" Language="C#" UnobtrusiveValidationMode="None" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="WebForm8.aspx.cs" Inherits="CV_Form.WebForm8" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1 class="MainHeader"></h1>
    <div class="FormContainer">
        <table cellpadding="10px" cellspacing="0">
            <tr>
                <td>&nbsp;Blog Başlığı</td>
                <td>
                    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                </td>
                <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="RequiredFieldValidator"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td>&nbsp;Blog İçeriği</td>
                <td>
                    <asp:TextBox Style="resize: none;" ID="TextBox2" runat="server"></asp:TextBox>
                </td>
                <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="RequiredFieldValidator"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td>
                &nbsp;Yazar<td>
                    <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                </td>
                <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="RequiredFieldValidator"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td>&nbsp;E-posta</td>
                <td>
                    <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
                    <br />
                </td>
                <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ErrorMessage="RequiredFieldValidator"></asp:RequiredFieldValidator>
                    <br />
                    <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ErrorMessage="RegularExpressionValidator"></asp:RegularExpressionValidator>
                </td>
            </tr>
            <tr>
                <td>
                    <asp:Button ID="Button1" runat="server" CssClass="button" Text="Gönder" OnClick="Button1_Click" ValidationGroup="GonderGrup" EnableTheming="False" />
                </td>
            </tr>
        </table>
    </div>
    <h1 class="SecondaryHeader">Bloglar</h1>
    <h1 class="SecondaryHeader">
        <asp:Button ID="Button5" runat="server" CssClass="button" Text="Veri Düzenle" OnClick="Button5_Click" />
    </h1>
    <div class="TableContainer">
        <table cellspacing="0" cellpadding="10px" border="1">
            <tr class="HeaderRow">
                <td>&nbsp;<label>Blog Başlığı</label></td>
                <td>&nbsp;<label>Blog İçeriği</label></td>
                <td>&nbsp;<label>Yazar</label></td>
                <td>&nbsp;<label>E-posta</label></td>
            </tr>
            <asp:Literal ID="LiteralTableRows" runat="server"></asp:Literal>
        </table>
    </div>
    <div class="ButtonContainer">
        <table>
            <tr>
                <td>
                    <asp:Button ID="Button2" runat="server" CssClass="button" Text="Sil" OnClick="Button2_Click" Visible="False" />
                </td>
                <td>
                    <asp:Button ID="Button3" runat="server" CssClass="button" Text="Güncelle" ValidationGroup="GonderGrup" OnClick="Button3_Click" Visible="False" />
                </td>
                <td>
                    <asp:Button ID="Button4" runat="server" CssClass="button" Text="Kaydet" OnClick="Button4_Click" Visible="False" />
                </td>
            </tr>
        </table>
    </div>
    <div class="ListBoxContainer">
        <asp:ListBox ID="ListBox1" runat="server" CssClass="ListBox" OnSelectedIndexChanged="ListBox1_SelectedIndexChanged" Visible="False"></asp:ListBox>
    </div>
</asp:Content>
