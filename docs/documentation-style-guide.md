# Farm Project Style Guide
This document serves as a general outline of the way documentation should be written throughout this project. It extends into best practices for code, and includes guidance on how to write good documentation.

## Core Standards
There's a few simple standards that apply to all the code and documentation:

- Documentation should be written in markdown (`.md`) format.
    - There's a few reasons for this: markdown is easy to write, a lot of people are familiar with it (it's the same format used in discord messages and reddit comments), and it integrates well into more advanced systems; it can be combined with LaTeX to create all sorts of documents.
    - Any text editor can be used to create and edit markdown documents; Vim, Emacs, even Notepad. More advanced IDEs like IntelliJ and VSCode are also great at editing markdown. There's even a number of free and popular markdown editors that focus on ease of use, like [Obsidian](https://obsidian.md/)
    - If you aren't familiar with markdown you can [learn all about it here](https://daringfireball.net/projects/markdown/syntax), or just [take this simple crash course to get the general idea](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), you can even [play a dorky game](https://learn-markdown-game.com/)
    - Markdown is essentially shorthand HTML, text can be compiled directly from one to the other. Which is why markdown documents look so good on GitHub. By writing our documentation in markdown we're able to use the git repository to host web-accessible versions of the docs.
- Style standards should be simple and repeatable.
    - A good example of this is the `gofmt` command, which standardizes the styling of a source code file to match the default standards for the language. Another great tool for maintaining styling is prettier, which can be installed with yarn or npm, [read more about it here](https://prettier.io/).
- Keep documentation close to files that the documentation concerns.
    - Use a symbolic link to make a reference in the documentation directory.

## General Guidelines
In addition to the core standards there's a few general guidelines to follow for best effect:

- Write in a hierarchical style, heading 1 > heading 2 > heading 3, etc.
- Link to other documents when possible `[links look like this](relative/path/doc.md)`
- Lists are a great way to communicate sets of information.
- Explain any concepts that a new student might not understand.
- Don't use too many words.
