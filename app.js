const express = require("express");
const accounts = require("./accounts");

const app = express();
const port = 8000;
app.use(express.json());

const createNewAcount = (newAccountData) => {
  console.log(newAccountData);
  const newId = accounts.length + 1;
  const newAcount = Object.assign({ id: newId }, newAccountData);
  console.log("My new account is", newAcount);
  return newAcount;
};
const deleteAccount = (accountIdToBeDeleted) => {
  const newAccounts = accounts.filter(
    (account) => account.id != accountIdToBeDeleted
  );
};
const updateAccount = (currentAccount, newData) => {
  const myUpdatedAccount = Object.assign(currentAccount, newData);
  return myUpdatedAccount;
};

app.get("/home", (req, res) => {
  res.json("Shouq");
});
app.get("/accounts", (req, res) => {
  res.status(200).json(accounts);
});
app.post("/accounts", (req, res) => {
  const newAcount = createNewAcount(req.body);
  accounts.push(newAcount);
  res.status(201).json(newAcount);
});
app.delete("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    deleteAccount(accountId);
    res.status(204).end();
  } else {
    res.status(404).json();
  }
});
app.put("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    const updatedAccount = updateAccount(accountId, req.body);
    res.status(200).json(updatedAccount);
  } else {
    res.status(404).json();
  }
});
app.listen(port, () => {
  console.log(`server is running at port ${port} `);
});
