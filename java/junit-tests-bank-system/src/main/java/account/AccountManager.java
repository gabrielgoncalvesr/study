package account;


import java.util.List;

import exception.ErrorMessages;
import exception.TransferNotAllowedException;

public class AccountManager {

	private List<CheckingAccount> accounts;

	public AccountManager(List<CheckingAccount> accounts) {
		this.accounts = accounts;
	}

	public List<CheckingAccount> getAccounts() {
		return accounts;
	}

	public CheckingAccount searchAccount(Integer accountId) {
		return accounts.stream().filter(account -> account.getId() == accountId).findAny().orElse(null);
	}
	
	public void addAccount(CheckingAccount newAccount) {
		accounts.add(newAccount);
	}
	
	public boolean removeAccount(Integer accountId) {
		return accounts.removeIf(account -> account.getId() == accountId);
	}

	public boolean isActiveAccount(Integer accountId) {
		return searchAccount(accountId).getActivated();
	}
	
	public boolean transferValue(Integer accountIdSource, Integer accountIdDestiny, Double value) throws TransferNotAllowedException {
		CheckingAccount accountSource = searchAccount(accountIdSource);
		CheckingAccount accountDestiny = searchAccount(accountIdDestiny);
		
		if(accountSource == null || accountDestiny == null) {
			throw new TransferNotAllowedException(ErrorMessages.INVALID_CLIENT_MESSAGE);
		}
		
		if(value >= accountSource.getBalance()) {
			throw new TransferNotAllowedException(ErrorMessages.INSUFFICIENT_VALUE_MESSAGE);
		}
		
		accountSource.setBalance(accountSource.getBalance() - value);
		accountDestiny.setBalance(accountDestiny.getBalance() + value);
		return true;
	}
}
