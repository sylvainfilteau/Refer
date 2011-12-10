# Refer > References guide creator

## Class structure

 * Refer\Processor: entry point of the app. Takes a source and a destination directory in the constructor. When calling the method _process_, it creates the HTML in the destination according to markdown files in source directory.
 * Refer\Parser\ParserInterface: Defines methods that should be implemented by parsers. There should be as many parsers than file format.
 * Refer\Parser\MarkdownParser: Proxy to the Markdown\_Parser package
 * Refer\Parser\ParserFactory: Creates parser by filename extension
 * Refer\PageStructure\Node: Represents a directory in the structure.
  * name
  * pages
  * childNodes
 * Refer\PageStructure\Page: Represents a page in HTML format.
  * title
  * content
 * Refer\PageStructure\PageFactory: Build a page from a source file.
  * fromFilename($filename)
 * Refer\PageStructure\NodeFactory: Build a tree of pages from a source directory.
  * fromDirectory($directory)

### Page structure

An alternative to data source is to create a internal page structure where all the content is processed when created. The page structure is then exported to disk with an exporter.

There would be the same principle of tree pages as leaf and directory as node. Each pages should provide a title and a content. The difference here is that the pages are already processed, so we can guess a better title for each pages. The title should be fetched from the HTML DOM structure, in the first &lt;h1&gt; tag.

### Export

The Export namespace enables to export PageStructure\Node to disk.

 * Refer\Export\DirectoryExporter: Exports the page structure to disk.

## Themes

Themes are located in pear data\_dir/refer/themes. Refer is currently packaged with one theme named _base_.

### Structure of a theme directory

A theme is simply copied in the destination directory. So, a theme is simply a collection of static files used to build the page in Ajax.

## Configurations

A source tree should be able to provide certain parameters to the processor to customize the rendering. Those parameters could be :

 * Theme name
 * Theme directory (if custom)
 * Global title
 * Specify new renderers
 * Authors
 * Copyrights

### Configuration file

Should be in json format at the root of the source directory. It should look like this :

    {
    	"theme": "ada",
    	"theme_directory": "../theme",
    	"title": "ADA Framework reference guide",
    }

### Configuration classes

The processor should look in the source directory for a config.json file. If it is present, it should load it with the class Refer\Configuration\Configuration. If not, it should provide a configuration for other classes containing default values.

 * Refer\Configuration\Configuration
