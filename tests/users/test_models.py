import pytest


def test_user_str(base_user):
    """Test the custom user model string representation"""
    assert base_user.__str__() == f"{base_user.username}"


def test_user_short_name(base_user):
    """Test the custom user model get_short_name method works"""
    short_name = f"{base_user.username}"
    assert base_user.get_short_name() == short_name


def test_user_full_name(base_user):
    """Test that the user models get_full_name method works"""
    full_name = f"{base_user.first_name} {base_user.last_name}"
    assert base_user.get_full_name == full_name


def test_base_user_email_is_normalized(base_user):
    """Test that a new users email is normalized"""
    email = "alpha@REALESTATE.COM"
    assert base_user.email == email.lower()


def test_super_user_email_is_normalized(super_user):
    """Test that an admin users email is normalized"""
    email = "alpha@REALESTATE.COM"
    assert super_user.email == email.lower()


def test_super_user_is_not_staff(user_factory):
    """Test that an error is raised when an admin user has is_staff set to false"""
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=True, is_staff=False)
    assert str(err.value) == "Superusers must have is_staff=True"


def test_super_user_is_not_superuser(user_factory):
    """Test that an error is raised when an admin user has is_superuser set to False"""
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=False, is_staff=True)
    assert str(err.value) == "Superusers must have is_superuser=True"


def test_create_user_with_no_email(user_factory):
    """Test that creating a new user with no email"""
    with pytest.raises(ValueError) as err:
        user_factory.create(email=None)
    assert str(err.value) == "Base User Account: An email address is required"


def test_create_user_with_no_username(user_factory):
    """Test that creating a new user with no username"""
    with pytest.raises(ValueError) as err:
        user_factory.create(username=None)
    assert str(err.value) == "Users must submit a username"


def test_create_user_with_no_first_name(user_factory):
    """Test that creating a new user with no first_name"""
    with pytest.raises(ValueError) as err:
        user_factory.create(first_name=None)
    assert str(err.value) == "Users must submit a first name"


def test_create_user_with_no_last_name(user_factory):
    """Test that creating a new user with no last_name"""
    with pytest.raises(ValueError) as err:
        user_factory.create(last_name=None)
    assert str(err.value) == "Users must submit a last name"


def test_create_super_user_with_no_password(user_factory):
    """Test that creating a new superuser with no password"""
    with pytest.raises(ValueError) as err:
        user_factory.create(password=None, is_staff=True, is_superuser=True)
    assert str(err.value) == "Superuser must have a password"


def test_create_super_user_with_no_email(user_factory):
    """Test that creating a new superuser with no email"""
    with pytest.raises(ValueError) as err:
        user_factory.create(email=None, is_staff=True, is_superuser=True)
    assert str(err.value) == "Admin account: an email address is required"


def test_create_user_with_incorrect_email(user_factory):
    """Test that creating a new user with incorrect email"""
    with pytest.raises(ValueError) as err:
        user_factory.create(email="realestate.com")
    assert str(err.value) == "You must provide a valid email"
