# Ways to compile and run Java

All commands assume you are in the project root (`java-test/`) and that the
code is `src/HelloWorld.java` (no `package`). Installed version: JDK 21.

First, the key idea: **NetBeans does all of this for you under the hood**. When you hit
"Run" it calls `javac` (the compiler) and then `java` (the virtual machine). Here you do
it by hand.

---

## 1. Run the `.java` directly (no manual compilation)

Since Java 11. It compiles in memory and runs; **it does not generate any file**.

```bash
java src/HelloWorld.java
```

- Ideal for scripts and quick tests.
- Limitation: designed for a single source file (the one you pass). If it uses other classes of yours, it fails (JDK 22+ already supports multiple files).

---

## 2. `javac` + `java` → `.class` files (the "classic" way)

This is what generates "several files": one `.class` per class.

```bash
mkdir -p out
javac -d out src/HelloWorld.java     # generates out/HelloWorld.class
java -cp out HelloWorld              # runs (class name, without .class)
```

- `-d out` = output folder for the `.class` files.
- `-cp out` (classpath) = where to look for the `.class` files.
- With several files: `javac -d out src/*.java`
- With packages (`package com.ejemplo;`) the `.class` files are created in subfolders and you run with `java -cp out com.ejemplo.HelloWorld`.
- To compile an entire folder tree:
  ```bash
  find src -name "*.java" > sources.txt
  javac -d out @sources.txt
  ```

---

## 3. `.jar` file (packaging the `.class` files into a single file)

A `.jar` is basically a `.zip` with the `.class` files inside. It is what is normally distributed.

```bash
mkdir -p out
javac -d out src/HelloWorld.java

# Executable JAR: --main-class sets the main class (Main-Class)
jar --create --file app.jar --main-class HelloWorld -C out .

java -jar app.jar
```

- View the contents: `jar tf app.jar`
- If you omit `--main-class`, the jar is not executable with `-jar`, but it can be used as a library: `java -cp app.jar HelloWorld`.
- **This is what NetBeans generates** in `dist/ProjectName.jar` when you do "Clean and Build".
- If your program uses external libraries (other `.jar` files), they are added with `-cp lib/*` or with `Class-Path` in the manifest.

### Variant: "fat jar" / "uber jar"
A single `.jar` that also includes all the dependencies. It is normally generated with Maven (Shade/Assembly plugin) or Gradle (Shadow plugin) — see sections 4 and 5.

---

## 4. Maven (build tool)

Manages dependencies, compilation, tests and packaging through a `pom.xml`. It is the most widely used standard in industry. **NetBeans supports Maven projects**.

Expected structure: `src/main/java/...` (here your code would have to go in `src/main/java/HelloWorld.java`).

```bash
mvn compile      # compiles to target/classes
mvn package      # compiles + tests + generates target/app.jar
java -jar target/app.jar
```

(Maven is not installed right now: `sudo apt install maven`.)

---

## 5. Gradle (build tool)

A modern alternative to Maven, using `build.gradle` or `build.gradle.kts`. It is the standard in Android. Gradle **is** installed (`/usr/bin/gradle`).

```bash
gradle init                 # creates a base project
gradle build                # compiles + tests + jar in build/libs/
gradle run                  # runs (with the 'application' plugin)
java -jar build/libs/app.jar
```

---

## 6. Apache Ant

The tool that **NetBeans "Java Application" projects use by default** (look at the `build.xml` and the `nbproject/` folder). If until now you have used NetBeans without Maven, you have been using Ant without knowing it.

```bash
ant clean jar        # generates dist/Project.jar
java -jar dist/Project.jar
```

---

## 7. Trimmed-down runtime with `jlink` (bundled JDK)

Creates a mini-JRE with only the modules your app needs, so you can run it without having Java installed. Requires a modular project (`module-info.java`).

```bash
jlink --module-path out --add-modules my.module --output runtime --launcher app=my.module/HelloWorld
./runtime/bin/app
```

---

## 8. Native installer with `jpackage` (JDK 14+)

Generates an operating-system installer/executable (`.deb`, `.rpm`, `.exe`, `.msi`, `.dmg`) that bundles its own Java.

```bash
jpackage --input . --main-jar app.jar --main-class HelloWorld --name MyApp --type deb
```

---

## 9. Native executable with GraalVM `native-image`

Compiles to machine code (no JVM): instant startup, low memory usage. Requires installing GraalVM.

```bash
javac -d out src/HelloWorld.java
native-image -cp out HelloWorld      # generates the ./helloworld executable
./helloworld
```

---

## 10. From an IDE (what you already know)

NetBeans, IntelliJ IDEA, Eclipse, VS Code (with the *Extension Pack for Java*). All of them use `javac` underneath plus one of the tools above (Ant, Maven or Gradle) and generate the `.jar` with "Build".

---

## Quick summary

| Method | Generates | When to use it |
|---|---|---|
| `java File.java` | nothing | quick tests and single-file scripts |
| `javac` + `java` | several `.class` files | learning, small projects |
| `jar` | a `.jar` | distributing the program/library |
| Maven / Gradle / Ant | `.jar` (and more) | real projects with dependencies |
| `jlink` | custom runtime | distributing without requiring Java |
| `jpackage` | OS installer | "installable" desktop app |
| `native-image` | native executable | fast startup, no JVM |

## For your specific case (HelloWorld.java)

The two that interest you most to get started:

```bash
# A) Several .class files
mkdir -p out && javac -d out src/HelloWorld.java && java -cp out HelloWorld

# B) A .jar
mkdir -p out && javac -d out src/HelloWorld.java \
  && jar --create --file app.jar --main-class HelloWorld -C out . \
  && java -jar app.jar
```
