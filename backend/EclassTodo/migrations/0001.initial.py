
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('pw', models.CharField(max_length=50)),
                ('name', models.CharField(max_length=50)),
                ('class_list', models.CharField(blank=True, max_length=200, null=True)),
                ('todo_list', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
    ]