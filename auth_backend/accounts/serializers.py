from rest_framework import serializers
import re

def validate_password(value):
    if len(value) < 6:
        raise serializers.ValidationError("Min 6 characters required")

    if not re.search(r"[A-Z]", value):
        raise serializers.ValidationError("1 uppercase required")

    if not re.search(r"\d", value):
        raise serializers.ValidationError("1 number required")

    if not re.search(r"[@$!%*?&]", value):
        raise serializers.ValidationError("1 special character required")

    return value


class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(validators=[validate_password])