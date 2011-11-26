# Refer > References guide creator

## Class structure

 * Refer\Processor: entry point of the app. Takes a source and a destination directory in the constructor. When calling the method _process_, it creates the HTML in the destination according to markdown files in source directory.
 * Refer\Parser\ParserInterface: Defines methods that should be implemented by parsers. There should be as many parsers than file format.
 * Refer\Parser\MarkdownParser: Proxy to the Markdown_Parser package
 * Refer\Parser\ParserFactory: Creates parser by filename extension
