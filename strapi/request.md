# Return populated field

http://localhost:1337/api/product?populate=image

# Return one field

http://localhost:1337/api/product?fields=name

# Return multiple fields

http://localhost:1337/api/product?fields[0]=name&fields[1]=description

# Return populate specific fields

http://localhost:1337/api/product?fields[0]=name&fields[1]=description&populate[image][fields][0]=url
