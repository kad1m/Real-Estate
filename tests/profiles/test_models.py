import pytest


def test_profile_str(profile):
    """Test profile str representation"""
    assert profile.__str__() == f"{profile.user.username}'s profile"
