# libraries
from sklearn.datasets import fetch_openml
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
from sklearn.preprocessing import LabelBinarizer
from keras.models import Sequential
from keras.layers.core import Dense
from keras.optimizers import SGD
import numpy as np
import matplotlib.pyplot as plt

def main():
    # importing MNIST
    print("[INFO] importando MNIST...")
    dataset = fetch_openml('mnist_784')

    # normalizing all pixels, to values stay in range [0, 1.0]
    data = dataset.data.astype("float") / 255.0
    labels = dataset.target

    # dividing the dataset between train (75%) and test (25%)
    (trainX, testX, trainY, testY) = train_test_split(data, dataset.target)

    # converting labels de integers vectors
    lb = LabelBinarizer()
    trainY = lb.fit_transform(trainY)
    testY = lb.transform(testY)

    # defining architecture of neural network using Keras
    # 784 (input) => 128 (hidden) => 64 (hidden) => 10 (output)
    model = Sequential()
    model.add(Dense(128, input_shape=(784,), activation="sigmoid"))
    model.add(Dense(64, activation="sigmoid"))
    model.add(Dense(10, activation="softmax"))

    # training the model using SGD (Stochastic Gradient Descent)
    print("[INFO] training the neural network...")
    model.compile(optimizer=SGD(0.01), loss="categorical_crossentropy", metrics=["accuracy"])
    H = model.fit(trainX, trainY, batch_size=128, epochs=100, verbose=2, validation_data=(testX, testY))

    # evaluating the neural network
    print("[INFO] evaluating neural network...")
    predictions = model.predict(testX, batch_size=128)
    print(classification_report(testY.argmax(axis=1), predictions.argmax(axis=1)))

    # plot loss and accuracy to datasets 'train' and 'test'
    plt.style.use("ggplot")
    plt.figure()
    plt.plot(np.arange(0,100), H.history["loss"], label="train_loss")
    plt.plot(np.arange(0,100), H.history["val_loss"], label="val_loss")
    plt.plot(np.arange(0,100), H.history["acc"], label="train_acc")
    plt.plot(np.arange(0,100), H.history["val_acc"], label="val_acc")
    plt.title("Training Loss and Accuracy")
    plt.xlabel("Epoch #")
    plt.ylabel("Loss/Accuracy")
    plt.legend()
    plt.show()

    return None

if __name__ == '__main__':
    main()