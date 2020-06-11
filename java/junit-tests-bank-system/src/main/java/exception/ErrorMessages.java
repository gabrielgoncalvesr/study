package exception;

public enum ErrorMessages {
	INVALID_AGE_MESSAGE("The client's age must be between 18 and 65 years old."),
	INVALID_CLIENT_MESSAGE("Invalid client."),
	INSUFFICIENT_VALUE_MESSAGE("Insufficient value to transfer.");

	private String value;

	private ErrorMessages(String value) {
		this.value = value;
	}

	public String getMessage() {
		return value;
	}
}