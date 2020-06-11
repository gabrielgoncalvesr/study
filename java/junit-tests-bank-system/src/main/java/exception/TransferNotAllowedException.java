package exception;

public class TransferNotAllowedException extends Exception {

	private static final long serialVersionUID = 1L;

	public TransferNotAllowedException(String message) {
		super(message);
	}
	
	public TransferNotAllowedException(ErrorMessages message) {
		super(message.getMessage());
	}
}