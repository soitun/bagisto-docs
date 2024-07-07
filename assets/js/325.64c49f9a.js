(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{696:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),a("li",[a("a",{attrs:{href:"#installation-setup"}},[t._v("Installation & Setup")]),a("ul",[a("li",[a("a",{attrs:{href:"#first-steps"}},[t._v("First steps")])]),a("li",[a("a",{attrs:{href:"#configure-the-docker-container"}},[t._v("Configure the Docker container")])]),a("li",[a("a",{attrs:{href:"#launching-the-docker-container"}},[t._v("Launching the Docker Container")])]),a("li",[a("a",{attrs:{href:"#monitoring-your-container-s"}},[t._v("Monitoring Your Container(s)")])])])]),a("li",[a("a",{attrs:{href:"#configuring-bagisto"}},[t._v("Configuring Bagisto")]),a("ul",[a("li",[a("a",{attrs:{href:"#install-without-composer"}},[t._v("Install without Composer")])]),a("li",[a("a",{attrs:{href:"#install-with-composer"}},[t._v("Install with composer")])]),a("li",[a("a",{attrs:{href:"#configuring-apache"}},[t._v("Configuring Apache")])]),a("li",[a("a",{attrs:{href:"#ready-to-use"}},[t._v("Ready to Use")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),a("OutboundLink")],1),t._v(" is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. Docker can also be used for defining and running multi-container Docker applications using the Docker Compose tool.")]),t._v(" "),a("p",[t._v("With the help of Docker Compose, you can define containers to be built, their configuration, links, volumes, ports, etc., in a single file, and it gets launched by a single command. You can also add multiple servers and services just by adding them to the Docker Compose configuration file. This configuration file is in "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/YAML",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML"),a("OutboundLink")],1),t._v(" format.")]),t._v(" "),a("h4",{attrs:{id:"application-data-and-database-volume-persistence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-data-and-database-volume-persistence"}},[t._v("#")]),t._v(" Application Data and Database Volume Persistence")]),t._v(" "),a("p",[t._v("It is recommended to keep your application files and database data volume on the Docker host and mount them on the running container. This ensures that the application and database data persistence even in the case of containers' failure or termination. In this way, even if you destroy containers, your data won't get lost unless you remove them forcefully.\nThis compose configuration file mounts the application directory "),a("strong",[a("code",[t._v("app")])]),t._v(" and database volume "),a("strong",[a("code",[t._v("dbvolume")])]),t._v(" from the host to running Docker containers at the time of containers' launch.")]),t._v(" "),a("h2",{attrs:{id:"installation-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-setup"}},[t._v("#")]),t._v(" Installation & Setup")]),t._v(" "),a("h3",{attrs:{id:"first-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-steps"}},[t._v("#")]),t._v(" First steps")]),t._v(" "),a("p",[t._v("Before you can launch Bagisto in a Docker environment, you need to install the latest versions of Docker and Docker Compose.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Compose"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),a("OutboundLink")],1),t._v(" (optional)")])]),t._v(" "),a("h3",{attrs:{id:"configure-the-docker-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-docker-container"}},[t._v("#")]),t._v(" Configure the Docker container")]),t._v(" "),a("p",[t._v("Once Docker and Docker Compose are installed, you need to create a "),a("strong",[a("code",[t._v("docker-compose.yml")])]),t._v(" file. The "),a("strong",[a("code",[t._v("docker-compose.yml")])]),t._v(" configuration file requires the following inputs from the user:")]),t._v(" "),a("h4",{attrs:{id:"webserver-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webserver-configuration"}},[t._v("#")]),t._v(" Webserver configuration")]),t._v(" "),a("p",[t._v("In the "),a("strong",[a("code",[t._v("web_server")])]),t._v(" service block, assign your system's working user UID to the "),a("strong",[a("code",[t._v("USER_UID")])]),t._v(" environment variable. To find your user ID, run the following command on Linux or macOS:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v("\n")])])]),a("h4",{attrs:{id:"database-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-configuration"}},[t._v("#")]),t._v(" Database configuration")]),t._v(" "),a("p",[t._v("In the "),a("strong",[a("code",[t._v("database_server")])]),t._v(" service block, assign the MySQL database name, MySQL database user name, MySQL database user password, and MySQL root password to the "),a("strong",[a("code",[t._v("MYSQL_DATABASE")])]),t._v(", "),a("strong",[a("code",[t._v("MYSQL_USER")])]),t._v(", "),a("strong",[a("code",[t._v("MYSQL_PASSWORD")])]),t._v(", and "),a("strong",[a("code",[t._v("MYSQL_ROOT_PASSWORD")])]),t._v(" environment variables, respectively.")]),t._v(" "),a("h4",{attrs:{id:"clone-configuration-from-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-configuration-from-github"}},[t._v("#")]),t._v(" Clone configuration from GitHub")]),t._v(" "),a("p",[t._v("You can make use of our repository from GitHub by cloning it into your new directory:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/bagisto/bagisto-docker.git "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("h4",{attrs:{id:"manual-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-configuration"}},[t._v("#")]),t._v(" Manual configuration")]),t._v(" "),a("p",[t._v("Alternatively, you can create a new folder, for example, "),a("strong",[a("code",[t._v("bagisto-docker")])]),t._v(", and manually create the "),a("strong",[a("code",[t._v("docker-compose.yml")])]),t._v(" file inside it. Add the following content to "),a("strong",[a("code",[t._v("docker-compose.yml")])]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web_server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" webkul/apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apache2\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/www/html\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("working_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/www/html/\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("USER_UID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mention your system user ID here. ex: 1001, 1000, 33, etc'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bagisto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("network\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'80:80'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("expose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'80'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" database_server\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("links")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" database_server\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("database_server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.7")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_DATABASE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mention the name of the database to be created here. eg: mydatabase'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mention database user here. eg: mydatabase_user'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mention database user password here. ex: mystrongPassword'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mention mysql root password here. ex: mysqlstrongpass'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_ROOT_HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bagisto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("network\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3306:3306'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("expose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3306'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./dbvolume"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/mysql\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dbvolume")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bagisto-network")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**")]),t._v("\n")])])]),a("h4",{attrs:{id:"downloading-the-docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downloading-the-docker-image"}},[t._v("#")]),t._v(" Downloading the Docker Image")]),t._v(" "),a("p",[t._v("To download the Docker images for Apache-PHP version 7.3 and MySQL version 5.7, execute the following command:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" pull\n")])])]),a("h3",{attrs:{id:"launching-the-docker-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launching-the-docker-container"}},[t._v("#")]),t._v(" Launching the Docker Container")]),t._v(" "),a("p",[t._v("Execute the following command to create a network and launch web server and database containers with the names "),a("strong",[a("code",[t._v("apache2")])]),t._v(" and "),a("strong",[a("code",[t._v("mysql")])]),t._v(" respectively. It will also create new directories "),a("strong",[a("code",[t._v("app")])]),t._v(" and "),a("strong",[a("code",[t._v("dbvolume")])]),t._v(" within your current directory and mount them to the respective Docker containers as specified in the "),a("strong",[a("code",[t._v("docker-compose.yml")])]),t._v(" file. Additionally, it binds your "),a("strong",[a("code",[t._v("host port 80")])]),t._v(" to the Apache2 container's port 80, and your "),a("strong",[a("code",[t._v("host port 3306")])]),t._v(" to the MySQL container's port 3306. If you wish to use different ports for the containers, modify their values in the "),a("strong",[a("code",[t._v("docker-compose.yml")])]),t._v(" file.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker-compose up -d\n")])])]),a("h3",{attrs:{id:"monitoring-your-container-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-your-container-s"}},[t._v("#")]),t._v(" Monitoring Your Container(s)")]),t._v(" "),a("p",[t._v("To check the running Docker containers, use the following commands:")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("docker ps")])]),t._v(" OR "),a("strong",[a("code",[t._v("docker-compose ps")])])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("CONTAINER ID   IMAGE                      COMMAND                  CREATED             STATUS             PORTS                               NAMES\n62a10346b84a   webkul/apache-php:latest   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/bin/supervisord"')]),t._v("   About an hour ago   Up About an hour   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:80-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/tcp                  apache2\n90a0a2e0e46b   mysql:5.7                  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docker-entrypoint.s…"')]),t._v("   About an hour ago   Up About an hour   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:3306-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("33060")]),t._v("/tcp   mysql\n")])])]),a("h2",{attrs:{id:"configuring-bagisto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-bagisto"}},[t._v("#")]),t._v(" Configuring Bagisto")]),t._v(" "),a("p",[t._v("After setting up your environment, you can proceed with the installation of Bagisto. There are two ways to install Bagisto: either from "),a("a",{attrs:{href:"#install-without-composer"}},[t._v("Github")]),t._v(" or using "),a("a",{attrs:{href:"#install-with-composer"}},[t._v("composer")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"install-without-composer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-without-composer"}},[t._v("#")]),t._v(" Install without Composer")]),t._v(" "),a("p",[t._v("To install Bagisto without using composer, follow these steps:")]),t._v(" "),a("ol",[a("li",[t._v("Download the "),a("a",{attrs:{href:"https://bagisto.com/en/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("latest release"),a("OutboundLink")],1),t._v(" and save it in the "),a("strong",[a("code",[t._v("app/bagisto")])]),t._v(" directory.")]),t._v(" "),a("li",[t._v("Open the "),a("strong",[a("code",[t._v(".env")])]),t._v(" file located inside the "),a("strong",[t._v("app/bagisto")]),t._v(" directory.")]),t._v(" "),a("li",[t._v("Set the following environment variables as shown below:")])]),t._v(" "),a("div",{staticClass:"language-editorconfig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("APP_URL")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("https://127.0.0.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("DB_CONNECTION")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("mysql")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("DB_HOST")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("mysql")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("DB_PORT")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("3306")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("DB_DATABASE")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("DB_USERNAME")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("DB_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\n")])])]),a("p",[t._v("Run the following commands to install Bagisto.")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" apache2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan migrate'\"")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" apache2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan db:seed'\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" apache2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan vendor:publish'\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" apache2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan storage:link'\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" apache2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'composer dump-autoload -d bagisto'\"")]),t._v("\n")])])]),a("p",[t._v("Mention the database details same as docker-compose.yml and admin details.")]),t._v(" "),a("h3",{attrs:{id:"install-with-composer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-with-composer"}},[t._v("#")]),t._v(" Install with composer")]),t._v(" "),a("p",[t._v("The following commands will be exexcuted within the docker container")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" apache2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'composer create-project bagisto/bagisto'\"")]),t._v("\n")])])]),a("p",[t._v("Open the .env file inside "),a("strong",[a("code",[t._v("app/bagisto")])]),t._v(" directory and set the following environment variables listed below:")]),t._v(" "),a("div",{staticClass:"language-editorconfig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("APP_URL")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("https://127.0.0.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("DB_CONNECTION")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("mysql")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("DB_HOST")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("mysql")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("DB_PORT")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("3306")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("DB_DATABASE")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("DB_USERNAME")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("DB_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\n")])])]),a("p",[t._v("To install Bagisto, execute the following commands:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" apache2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan migrate'\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" apache2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan db:seed'\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" apache2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan vendor:publish'\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" apache2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan storage:link'\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" apache2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'composer dump-autoload -d bagisto'\"")]),t._v("\n")])])]),a("p",[t._v("Bagisto has been successfully installed and is now ready to use. To access it, open your web browser and enter your server's IP address or domain name.")]),t._v(" "),a("h3",{attrs:{id:"configuring-apache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-apache"}},[t._v("#")]),t._v(" Configuring Apache")]),t._v(" "),a("p",[t._v("By default, the Apache document root is set to "),a("strong",[t._v("/var/www/html/public_html")]),t._v(". Additionally, the "),a("strong",[t._v("app")]),t._v(" directory on your host machine is mapped to the "),a("strong",[t._v("html")]),t._v(" directory inside the container. To ensure proper configuration, we need to create a symlink of "),a("strong",[a("code",[t._v("bagisto/public")])]),t._v(" in the "),a("strong",[a("code",[t._v("app")])]),t._v(" directory that points to "),a("strong",[a("code",[t._v("/var/www/html/public_html")])]),t._v(".")]),t._v(" "),a("p",[t._v("To create the symlink, follow the steps below:")]),t._v(" "),a("p",[t._v("On Linux or macOS, run the following command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-snf")]),t._v(" bagisto/public public_html\n")])])]),a("p",[t._v("On Windows, run the following command:")]),t._v(" "),a("div",{staticClass:"language-command-line extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd app\nmklink bagisto/public public_html\n")])])]),a("h3",{attrs:{id:"ready-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ready-to-use"}},[t._v("#")]),t._v(" Ready to Use")]),t._v(" "),a("h4",{attrs:{id:"admin-login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-login"}},[t._v("#")]),t._v(" Admin Login:")]),t._v(" "),a("p",[t._v("You can access the admin interface by visiting "),a("a",{attrs:{href:"http://your_server_endpoint/admin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://your_server_endpoint/admin"),a("OutboundLink")],1),t._v(" and logging in with the following credentials:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Email")]),t._v(" "),a("th",[t._v("Password")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("admin@example.com")]),t._v(" "),a("td",[t._v("admin123")])])])]),t._v(" "),a("h4",{attrs:{id:"customer-login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customer-login"}},[t._v("#")]),t._v(" Customer Login:")]),t._v(" "),a("p",[t._v("To access your store, visit "),a("a",{attrs:{href:"http://your_server_endpoint/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://your_server_endpoint/"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);