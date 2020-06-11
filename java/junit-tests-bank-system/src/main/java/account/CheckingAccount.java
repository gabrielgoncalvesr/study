package account;
public class CheckingAccount {

	private Integer id;
	private Double balance;
	private Boolean activated;

	/*
	 * Constructor
	 */
	public CheckingAccount(Integer id, Double balance, Boolean activated) {
		this.id = id;
		this.balance = balance;
		this.activated = activated;
	}

	/*
	 * Getters
	 */
	public Integer getId() {
		return id;
	}

	public Double getBalance() {
		return balance;
	}

	public Boolean getActivated() {
		return activated;
	}

	/*
	 * Setters
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	public void setBalance(Double balance) {
		this.balance = balance;
	}

	public void setActivated(Boolean activated) {
		this.activated = activated;
	}
}