# Refer

A tool to create documentation or reference guide using Markdown syntax

## How to install from PEAR

Executes these commands:

    sudo pear channel-discover pear.ada-consult.com
    sudo pear channel-discover pear.symfony.com
    sudo pear channel-discover zend.googlecode.com/svn
    sudo pear install ada/Refer symfony2/Finder zend/Zend

## How to use it

 1. Create a directory and put some mardown files (with extension .md).
 1. You can add sub-directories with markdown files in it. The base theme will render a tree of pages on the left panel.
 1. Create another directory where to put the rendering
 1. Call this program in command line:

    refer.php source_dir destination_dir

### Configuration

You can customize the rendering of your reference guide by adding a configuration file in your source directory.

The configuration file should be named config.json and put this in it :

    {
    	"theme": "theme_name",
    	"theme_directory": "/path/to/your/theme/directories"
    }

"theme\_name" should be a subdirectory of "theme\_directory". When the documentation will be processed, the content of the theme will be copied to the destination directory.

## How to install for development

 1. Clone this repository
 1. Use this command :

    REFER=/path/to/clone/src/php php /path/to/clone/src/bin/refer.php source_directory destination_directory

The REFER constants is added to the include\_path. It's also a flag indicating that you are using a development environment. The PEAR data\_dir is changed for the development data directory.
