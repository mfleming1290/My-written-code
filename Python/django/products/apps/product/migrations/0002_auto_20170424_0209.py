# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-04-24 02:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='cost',
            field=models.IntegerField(max_length=45),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.IntegerField(max_length=45),
        ),
        migrations.AlterField(
            model_name='product',
            name='weight',
            field=models.IntegerField(max_length=45),
        ),
    ]
