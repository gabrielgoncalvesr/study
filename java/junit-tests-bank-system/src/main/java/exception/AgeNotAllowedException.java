package exception;

public class AgeNotAllowedException extends Exception {

	private static final long serialVersionUID = 1L;

	public AgeNotAllowedException(String message) {
		super(message);
	}
	
	public AgeNotAllowedException(ErrorMessages message) {
		super(message.getMessage());
	}
}