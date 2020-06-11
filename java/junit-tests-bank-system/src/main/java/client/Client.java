package client;

public class Client {

	private Integer id;
	private Integer age;
	private String name;
	private String email;
	private Boolean activated;
	private Integer idCheckingAccount;

	/*
	 * Constructor
	 */
	public Client(Integer id, String name, String email, Boolean activated, Integer age, Integer idCheckingAccount) {
		this.id = id;
		this.age = age;
		this.name = name;
		this.email = email;
		this.activated = activated;
		this.idCheckingAccount = idCheckingAccount;
	}

	/*
	 * Getters
	 */
	public Integer getId() {
		return id;
	}
	
	public Integer getAge() {
		return age;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

	public Boolean getActivated() {
		return activated;
	}

	public Integer getIdCheckingAccount() {
		return idCheckingAccount;
	}

	/*
	 * Setters
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setActivated(Boolean activated) {
		this.activated = activated;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public void setIdCheckingAccount(Integer idCheckingAccount) {
		this.idCheckingAccount = idCheckingAccount;
	}
}