from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.common.models import TimeStampedUUIDModel
from apps.profiles.models import Profile
from real_estate.settings.base import AUTH_USER_MODEL


class Rating(TimeStampedUUIDModel):
    class Range(models.IntegerChoices):
        RATING_1 = 1, _("POOR")
        RATING_2 = 2, _("FAIR")
        RATING_3 = 3, _("GOOD")
        RATING_4 = 4, _("VERY GOOD")
        RATING_5 = 5, _("EXCELLENT")

    rater = models.ForeignKey(
        AUTH_USER_MODEL,
        verbose_name=_("User providing the rating"),
        on_delete=models.SET_NULL,
        null=True,
    )
    agent = models.ForeignKey(
        Profile,
        verbose_name=_("Agent being rated"),
        related_name="agent_review",
        on_delete=models.SET_NULL,
        null=True,
    )
    rating = models.IntegerField(
        verbose_name=_("Rating"),
        choices=Range.choices,
        help_text=_("1=Poor, 2=Fair, 3= Good, 4=Very good, 5=Excellent"),
        default=0,
    )
    comment = models.TextField(verbose_name=_("Comment"))

    class Meta:
        unique_together = ["rater", "agent"]

    def __str__(self):
        return f"{self.agent} rated at {self.rating}"