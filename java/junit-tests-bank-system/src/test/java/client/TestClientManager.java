package client;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertThat;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import exception.AgeNotAllowedException;

public class TestClientManager {
	
	private static ClientManager clientManager;
	
	@Before
	public void setUp() {
		clientManager = new ClientManager();
	}

	@After
	public void tearDown() {
		clientManager.clear();
	}
	
	/**
	 * Method to test valid client search.
	 */
	@Test
	public void testSearchClient() {
		// preparing
		clientManager.clear();
		
		Client firstClient = new Client(1, "Gustavo Farias", "gugafarias@gmail.com", true, 31, 1);
		Client secondClient = new Client(2, "Felipe Augusto", "felipeaugusto@gmail.com", true, 34, 2);

		clientManager.addClient(firstClient);
		clientManager.addClient(secondClient);

		// executing
		Client expected = clientManager.searchClient(1);

		// checking
		assertThat(expected.getId(), is(1));
		assertThat(expected.getEmail(), is("gugafarias@gmail.com"));
	}
	
	/**
	 * Method to test valid client remove.
	 */
	@Test
	public void testRemoveClient() {
		// preparing
		clientManager.clear();
		
		Client firstClient = new Client(1, "Gustavo Farias", "gugafarias@gmail.com", true, 31, 1);
		Client secondClient = new Client(2, "Felipe Augusto", "felipeaugusto@gmail.com", true, 34, 2);

		clientManager.addClient(firstClient);
		clientManager.addClient(secondClient);
		
		// executing
		boolean expected = clientManager.removeClient(2);
		
		// checking
		assertThat(expected, is(true));
		assertThat(clientManager.getClients().size(), is(1));
		assertNull(clientManager.searchClient(2));
	}
	
	/**
	 * Method to test valid client age.
	 */
	@Test
	public void testValidateAge() {
		// preparing
		clientManager.clear();
				
		Client firstClient = new Client(1, "Gustavo Farias", "gugafarias@gmail.com", true, 31, 1);

		clientManager.addClient(firstClient);

		// executing and checking
		try {
			boolean expected = clientManager.validateAge(firstClient.getAge());
			assertThat(expected, is(true));
		} catch (AgeNotAllowedException e) {
			Assert.fail();
		}
	}
	
	/**
	 * Method to test error in validate of client age.
	 */
	@Test
	public void testErrorValidateAge() {
		// preparing
		clientManager.clear();
				
		Client firstClient = new Client(1, "Gustavo Farias", "gugafarias@gmail.com", true, 10, 1);

		clientManager.addClient(firstClient);

		// executing and checking
		try {
			clientManager.validateAge(firstClient.getAge());
			Assert.fail();
		} catch (AgeNotAllowedException e) {
			assertThat(e.getLocalizedMessage(), is("The client's age must be between 18 and 65 years old."));
		}
	}
}