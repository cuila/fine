const artists = [
  { id: 1, title: "Fine Artist 1" },
  { id: 2, title: "Fine Artist 2" },
  { id: 3, title: "Fine Artist 3" }
];

const museums = [
  { id: 1, title: "Fine National Museum 1" },
  { id: 2, title: "Fine National Museum 2" },
  { id: 3, title: "Fine National Museum 3" }
];

module.exports = (req, res) => {
  const data = {
    ...artists,
    ...museums
  };
  res.status(200).send(data);
};
