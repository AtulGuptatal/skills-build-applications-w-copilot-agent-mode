from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class OctofitTrackerModelTests(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(name='Marvel')
        self.assertEqual(team.name, 'Marvel')

    def test_user_creation(self):
        team = Team.objects.create(name='DC')
        user = User.objects.create(name='Superman', email='superman@dc.com', team=team)
        self.assertEqual(user.name, 'Superman')
        self.assertEqual(user.team.name, 'DC')

    def test_activity_creation(self):
        team = Team.objects.create(name='Marvel')
        user = User.objects.create(name='Iron Man', email='ironman@marvel.com', team=team)
        activity = Activity.objects.create(user=user, type='Running', duration=30, date='2026-02-21')
        self.assertEqual(activity.type, 'Running')

    def test_leaderboard_creation(self):
        team = Team.objects.create(name='Marvel')
        leaderboard = Leaderboard.objects.create(team=team, points=100)
        self.assertEqual(leaderboard.points, 100)

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Pushups', description='Do 20 pushups', suggested_for='Superheroes')
        self.assertEqual(workout.name, 'Pushups')
