package core;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import account.TestAccountManager;
import client.TestClientManager;

@RunWith(Suite.class)
@SuiteClasses({ TestAccountManager.class, TestClientManager.class })
public class AllTests {
}