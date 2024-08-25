from django.db import models
from django.contrib.auth.models import User

#セーブデータ
class Save_data(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='save_user')
    save_page = models.IntegerField(default=0)
