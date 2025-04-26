const getContacts = (req, res) => {
  res.status(200).json({ msg: "Get all Contacts" });
};

const createContact = (req, res) => {
  console.log(req.body);
  const { name, age, email } = req.body;
  if (!name || !age || !email) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  res.status(201).json({ msg: "Create contacts" });
};

const getContact = (req, res) => {
  res.status(202).json({ msg: `get Contact for ${req.params.id}` });
};

const updateContact = (req, res) => {
  res.status(203).json({ msg: `update contact for ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(202).json({ msg: `delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
