package client;

import java.util.List;

import exception.AgeNotAllowedException;
import exception.ErrorMessages;

public class ClientManager {

	private List<Client> clients;

	public List<Client> getClients() {
		return clients;
	}

	public Client searchClient(Integer clientId) {
		return clients.stream().filter(client -> client.getId() == clientId).findAny().orElse(null);
	}

	public void addClient(Client newClient) {
		clients.add(newClient);
	}

	public boolean removeClient(Integer clientId) {
		return clients.removeIf(client -> client.getId() == clientId);
	}

	public boolean isActiveClient(Integer clientId) {
		return searchClient(clientId).getActivated();
	}

	public void clear() {
		clients.clear();
	}

	public boolean validateAge(Integer age) throws AgeNotAllowedException {
		if (age < 18 || age > 65) {
			throw new AgeNotAllowedException(ErrorMessages.INVALID_AGE_MESSAGE);
		}
		return true;
	}
}