# Why Go
The back-end systems are dominated by an API written in Go. The question has been raised: why write the API in Go?

## Why Not?
One of the first questions to consider could be 'why not Go?'; what are other possible contenders, and what are their advantages?

* **Python**: it's simple to write, can be very intuitive to read, and many students are familiar with it.
* **JavaScript/NodeJS**: uses the same language as the front-end systems, and the same syntax for both.
* **C**: highly performant and compiled language often taught in computer science.

Every option has trade-offs, so what are the benefits Go offers over Python, JavaScript, and C?

## Performance
One of the primary concerns when comparing languages is how the architecture of each language impacts the resources needed to compile and run the software.

Python and JavaScript are both interpreted languages, which means that the scripts need to be compiled as they're executed, which inherently limits performance. In addition to that, Python defaults to a single thread, which requires additional software (such as gunicorn) to run an API that can handle concurrent requests.

C and Go are nearly equal in terms of speed, with C being just a small amount faster, though Go is much faster to compile and test.

## Containerization
Being able to run software in a container allows it to be deployed much more easily, using tools like docker compose. The main downside is that most containers require an OS to run the code that runs the software. E.g. A Python API would require a container with something like a Linux OS that has the Python3 interpreter installed, then that container would execute the scripts.

With Go the compiled code is able to be executed directly on the container, 'bare metal', allowing for containers that are only a couple megabytes in size. This means that hundreds of copies of the API can be hosted simultaneously without requiring excessive resources. Without the requirement for an OS, or Node, or Python, the API can function with only a simple binary.

## Support/Documentation
Go is a modern language with really good documentation. It's getting frequent updates, new features, tons of libraries, and it's on the cutting edge of software development. Python is still relevant, but it isn't as much on the forefront of web development as it once was. Node has robust docs, but there's more pitfalls and difficulties with deployment in a production environment.

Not only is Go well documented officially, it's also got famously well written docs for third party libraries, and a highly informative error system for debugging code.

## DevOps
The way Go dependencies are packaged and distributed in modules makes it highly convenient for collaboration. It's simple to keep the team updated with any necessary dependencies, and by leveraging git it's easy for everything to stay patched and secure. Go also has built-in testing and debugging tools that make development operations a dream. It's much easier to get help and debug when you get quality, actionable output from the terminal. JavaScript, Python, and C all leave much to be desired in regards to testing and terminal output.

## Security
Go is a type-safe compiled language, which means a huge number of potential issues are sidestepped during development. In addition to those features, Go is also memory safe; it leverages a simple garbage compiling routine to prevent memory leaks. This makes it very forgiving for new developers. Instead of allowing a typo to sink a build it will usually be caught at compile, and if it somehow gets through into the build the executable will give a full stack trace and exit (as opposed to locking up the entire system).

# Why Not C?
Doesn't C have many of those advantages, plus it's already taught in Computer Science Foundations? After all that, why not just stick with good old C?

## Web APIs aren't written in C
I've been working in the industry for almost two decades, and I haven't seen a C API in a very long time. I'm not even sure how you'd deploy one, you'd either need to write the entire web server yourself or execute it as some sort of CGI script behind an Apache server. It's messy and poorly adapted to the task. Go is the preferred industry standard for high quality API systems, it makes sense to use the best tool for the job.

## Debugging and compiling
Go has a better compiler, it's faster and it gives more helpful errors. It also has built-in debugging and testing features which make it a lot more comfortable to develop on, especially for junior developers. Debugging and testing in C is such a bear that many students avoid it for way too long. By starting with Go, it makes it easy to pick up testing and debugging practices along the way.

## Similar enough
Go and C are sibling languages, they have the same father in Ken Thompson. While they are not identical, in many ways Go can be seen as a spiritual successor to C. If a student is proficient in C, it's likely for them to pick up Go with relative ease; conversely, writing Go in this SoS will help prepare students for classes which use C for coursework.
