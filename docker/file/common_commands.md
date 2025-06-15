# Simplified

`FROM`: Specify image to use.

`RUN`: executes commands in the image.

`COPY`: copy files from host inside the image.

`WORKDIR`: specifies image working directory.

`CMD`: defines commands to be executed when the container is initiated.

`ENTRYPOINT`: same as cmd command but cannot overwrite.

# Advanced

### WORKDIR

These instructions conclude with the same result.

```
WORKDIR: /app
COPY script.py .
```

```
COPY script.py /app/script.py
```