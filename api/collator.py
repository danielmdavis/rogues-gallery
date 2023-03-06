import json

f = open("BostonResidentialParcels2015_2016_Example.json")
records = json.load(f)

collated = {}

for record in records:
  if record["OWNER_NM"] in collated.keys():
    collated[record["OWNER_NM"]].append(record)
  else:
    collated[record["OWNER_NM"]] = [record]


for lord in collated:
  landlord = collated[lord]
  collated[lord] = [landlord.pop(0)]

  if len(landlord) > 0:
    for property in landlord:
      match = False
      for each in collated[lord]:
        if property["MAIL_ADDRESS"] == each["MAIL_ADDRESS"]:
          match = True
      if match == False:
        collated[lord].append(property)


with open('collated.json', 'w') as f:
    json.dump(collated, f)