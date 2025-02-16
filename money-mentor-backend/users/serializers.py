from rest_framework import serializers
from .models import User



class UserSerializer(serializers.HyperlinkedModelSerializer):

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)

        if password is not None:
            instance.set_password(password)
        instance.is_staff=False
        instance.is_superuser=False
        instance.is_active=True
        instance.save()
        return instance

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instace, attr, value)
        instance.is_staff=False
        instance.is_superuser=False
        instance.save()
        return instance

    class Meta:
        model = User
        extra_kwargs = {'password': {'write_only': True}}
        fields = ('id','url','first_name', 'last_name', 'email', 'mobile_no' ,'password', 'image',
                  'is_active', 'is_staff', 'is_superuser', 'auth_provider', 'created_at', 'updated_at')

