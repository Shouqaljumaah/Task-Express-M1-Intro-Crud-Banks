const deleteAccount = (accountIdToBeDeleted) => {
  const newAccounts = accounts.filter(
    (account) => account.id != accountIdToBeDeleted
  );
};
exports.deleteAccounts = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    deleteAccount(accountId);
    res.status(204).end();
  } else {
    res.status(404).json();
  }
};

const updateAccount = (currentAccount, newData) => {
  const myUpdatedAccount = Object.assign(currentAccount, newData);
  return myUpdatedAccount;
};
exports.updateAccounts = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    const updatedAccount = updateAccount(accountId, req.body);
    res.status(200).json(updatedAccount);
  } else {
    res.status(404).json();
  }
};

const createNewAcount = (newAccountData) => {
  console.log(newAccountData);
  const newId = accounts.length + 1;
  const newAcount = Object.assign({ id: newId }, newAccountData);
  console.log("My new account is", newAcount);
  return newAcount;
};
exports.createAccounts = (req, res) => {
  const newAcount = createNewAcount(req.body);
  accounts.push(newAcount);
  res.status(201).json(newAcount);
};
