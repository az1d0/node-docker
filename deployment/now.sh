npm install -g now
echo "Deploying in now..."
URL = $(now --docker -t $NOW_TOKEN)
echo "Running on $URL"
curl --silent -L $URL