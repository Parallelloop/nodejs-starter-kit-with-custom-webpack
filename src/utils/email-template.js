const { APP_LINK } = process.env;

export const credentialsSyncedTemplated = (userName, token) => `<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<style type="text/css">
    @media screen {
        @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
        }

        @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
        }

        @font-face {
            font-family: 'Lato';
            font-style: italic;
            font-weight: 400;
            src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
        }

        @font-face {
            font-family: 'Lato';
            font-style: italic;
            font-weight: 700;
            src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
        }
    }

    /* CLIENT-SPECIFIC STYLES */
    body,
    table,
    td,
    a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }

    table,
    td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
    }

    img {
        -ms-interpolation-mode: bicubic;
    }

    /* RESET STYLES */
    img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
    }

    table {
        border-collapse: collapse !important;
    }

    body {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
    }

    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }

    /* MOBILE STYLES */
    @media screen and (max-width:600px) {
        h1 {
            font-size: 32px !important;
            line-height: 32px !important;
        }
    }

    /* ANDROID CENTER FIX */
    div[style*="margin: 16px 0;"] {
        margin: 0 !important;
    }
</style>
</head>

<body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We're thrilled to have you here! Get ready to dive into your new account. </div>
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <!-- LOGO -->
    <tr>
        <td bgcolor="#556EE6" align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                    <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td bgcolor="#556EE6" align="center" style="padding: 0px 10px 0px 10px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                    <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                       <img src="data:image/png;base64,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" width="160" style="display: block; border: 0px;" /> <h1 style="font-size: 48px; font-weight: 400;">Welcome!</h1>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                    <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                        <p style="margin: 0;">Hi <b>${userName}</b>. In order to reset your password please click the button below.</p>
                    </td>
                </tr>
                <tr>
                    <td bgcolor="#ffffff" align="left">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;">
                                    <table border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td align="center" style="border-radius: 3px;" bgcolor="#FD7923"><a href="${APP_LINK}/auth/change-password?token=${token}" style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #; display: inline-block;">Reset Password</a></td>
                                            </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr> <!-- COPY -->
                <tr>
                    <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                        <p style="margin: 0;">If you have any questions, just reply to this email — nabeelsajid917@gmail.com we're always happy to help out.</p>
                    </td>
                </tr>
                <tr>
                    <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                        <p style="margin: 0;">Cheers,<br>Nodejs starter</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>

</html>`;
