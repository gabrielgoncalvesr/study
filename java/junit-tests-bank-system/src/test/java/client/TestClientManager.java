package client;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Test;

public class TestClientManager {
	
	private static ClientManager clientManager;
	
	static {
		clientManager = new ClientManager();
	}
	
	@Test
	public void testSearchClient() {
		clientManager.clear();
		
		Client firstClient = new Client(1, "Gustavo Farias", "gugafarias@gmail.com", true, 31, 1);
		Client secondClient = new Client(2, "Felipe Augusto", "felipeaugusto@gmail.com", true, 34, 2);

		clientManager.addClient(firstClient);
		clientManager.addClient(secondClient);

		Client expected = clientManager.searchClient(1);

		assertThat(expected.getId(), is(1));
		assertThat(expected.getEmail(), is("gugafarias@gmail.com"));
	}
}