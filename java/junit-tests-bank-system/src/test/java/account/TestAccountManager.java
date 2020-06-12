package account;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import exception.TransferNotAllowedException;

public class TestAccountManager {
	
	private static AccountManager accountManager;
	
	@Before
	public void setUp() {
		accountManager = new AccountManager();
	}

	@After
	public void tearDown() {
		accountManager.clear();
	}
	
	/**
	 * Method to test transfer value.
	 */
	@Test
	public void testTranferValue() {
		// preparing
		accountManager.clear();
		
		CheckingAccount firstAccount = new CheckingAccount(1, Double.valueOf(200), true);
		CheckingAccount secondAccount = new CheckingAccount(2, Double.valueOf(0), true);

		accountManager.addAccount(firstAccount);
		accountManager.addAccount(secondAccount);

		// executing
		try {
			accountManager.transferValue(1, 2, Double.valueOf(100));
		} catch (TransferNotAllowedException e) {
			Assert.fail();
		}
		
		// checking
		assertThat(firstAccount.getBalance(), is(100.0));
		assertThat(secondAccount.getBalance(), is(100.0));
	}
	
	/**
	 * Method to test transfer to invalid client.
	 */
	@Test
	public void testErrorInvalidClient() {
		// preparing
		accountManager.clear();
		
		CheckingAccount firstAccount = new CheckingAccount(1, Double.valueOf(200), true);

		accountManager.addAccount(firstAccount);

		// executing and checking
		try {
			accountManager.transferValue(1, 2, Double.valueOf(100));
			Assert.fail();
		} catch (TransferNotAllowedException e) {
			assertThat(e.getLocalizedMessage(), is("Invalid client."));
		}
	}
	
	/**
	 * Method to test transfer with insufficient value.
	 */
	@Test
	public void testErrorInsufficientValue() {
		// preparing
		accountManager.clear();
		
		CheckingAccount firstAccount = new CheckingAccount(1, Double.valueOf(0), true);
		CheckingAccount secondAccount = new CheckingAccount(2, Double.valueOf(200), true);

		accountManager.addAccount(firstAccount);
		accountManager.addAccount(secondAccount);

		// executing and checking
		try {
			accountManager.transferValue(1, 2, Double.valueOf(100));
			Assert.fail();
		} catch (TransferNotAllowedException e) {
			assertThat(e.getLocalizedMessage(), is("Insufficient value to transfer."));
		}
	}
}