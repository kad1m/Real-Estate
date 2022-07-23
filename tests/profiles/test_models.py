import pytest


def test_profile_str(profile):
    assert profile.__str__() == f"{profile.user.username}'s profile"
