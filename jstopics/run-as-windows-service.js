hmLoadTopic({
hmKeywords:"",
hmTitle:"Creating a Windows Service",
hmDescription:"While there are many ways to register a program as a Windows Service, we recommend the following approach with PowerShell. Note you need to run PowerShell with administrative...",
hmPrevLink:"",
hmNextLink:"",
hmParentLink:"common.html",
hmBreadCrumbs:"",
hmTitlePath:"Common > Article numbers",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Creating a Windows Service<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">While there are many ways to register a program as a Windows Service, we recommend the following approach with PowerShell. Note you need to run PowerShell with administrative privileges to modify Windows Services.<\/p>\n\r<p class=\"p_Normal\">Creating a Windows Service for the Digital Twin Registration Agent can be done with the <span class=\"f_InlineCode\">New-Service<\/span> PowerShell cmdlet. For full documentation of this cmdlet type <span class=\"f_InlineCode\">Get-Help New-Service -Online<\/span> &nbsp;in PowerShell.<\/p>\n\r<p class=\"p_Normal\">Note that multiple windows service can be created based on the same installation↲↲↲ of the Digital Twin Registration Agent. However make sure that these service use different Environments and therefore different configuration. The Digital Twin Registration Agent will not allow two instances to run with the same configuration.<\/p>\n\r<p class=\"p_Normal\">General Syntax of the New-Service cmdlet:<\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span class=\"f_CodeExample\">New-Service&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-Name]&nbsp;&lt;String&gt;&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-BinaryPathName]&nbsp;&lt;String&gt;&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-DisplayName&nbsp;&lt;String&gt;]&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-Description&nbsp;&lt;String&gt;]&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-SecurityDescriptorSddl&nbsp;&lt;String&gt;]&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-StartupType&nbsp;&lt;ServiceStartupType&gt;]&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-Credential&nbsp;&lt;PSCredential&gt;]&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-DependsOn&nbsp;&lt;String[]&gt;]&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-WhatIf]&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-Confirm]&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[&lt;CommonParameters&gt;]<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Suggestions for the parameters to use:<\/p>\n\r<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0.3750rem 0;\"><table style=\"border:none; border-spacing:0;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:9.6250rem; padding:0; border:none\"><p class=\"p_Normal\">Parameter<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:43.0000rem; padding:0; border:none\"><p class=\"p_Normal\">Notes<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.6250rem; padding:0; border:none\"><p class=\"p_Normal\">-Name<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:43.0000rem; padding:0; border:none\"><p class=\"p_Normal\">It is recommended to put the environment name in the service name so that multiple service can be installed, e.g.: <span class=\"f_InlineCode\">DTRA_&lt;EnvironmentName&gt;<\/span><\/p>\n\r<p class=\"p_Normal\">The name cannot be null or have zero length. Its maximum size is 256 characters. It also cannot contain forward or backward slashes, \'\/\' or \'\\\', or characters from the ASCII character set with value less than decimal value 32.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.6250rem; padding:0; border:none\"><p class=\"p_Normal\">-BinaryPathName<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:43.0000rem; padding:0; border:none\"><p class=\"p_Normal\">The full path to the executable of the Digital Twin Registration Agent including the command line switch for the Environment. Environment name should be consistent with the -Name parameter.<\/p>\n\r<p class=\"p_Normal\"><span class=\"f_InlineCode\">\'&quot;&lt;FullPathToExe&quot; &quot;-Environment=&lt;EnvironmentName&gt;&quot;\'<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:9.6250rem; padding:0; border:none\"><p class=\"p_Normal\">-StartupType &nbsp;<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:43.0000rem; padding:0; border:none\"><p class=\"p_Normal\">Recommended: <span class=\"f_InlineCode\">Automatic<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Example <\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span class=\"f_CodeExample\">New-Service&nbsp;`<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">-Name&nbsp;&quot;DRTA_Production&quot;&nbsp;`<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">-BinaryPathName&nbsp;\'&quot;&lt;path&gt;\\Hsm.DigitalTwinRegistrationAgent.exe&nbsp;--Environment=Production&quot;&nbsp;`<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">-DisplayName&nbsp;&quot;HsM&nbsp;Digital&nbsp;Twin&nbsp;Registration&nbsp;Agent&nbsp;-&nbsp;Production&quot;&nbsp;`<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">-Description&nbsp;&quot;Registeres&nbsp;digital&nbsp;twins&nbsp;with&nbsp;the&nbsp;HsM&nbsp;Digital&nbsp;Twin&nbsp;Service&quot;&nbsp;`<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">-StartupType&nbsp;&quot;Automatic&quot;<\/span><\/p>\n\r"
})