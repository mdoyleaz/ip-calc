# api/config.py

import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    """
    Common Configurations
    """
    APPLICATION_ROOT = "/api"


class DevelopmentConfig(Config):
    """
    Development Configurations
    """
    DEBUG = True


class ProductionConfig(Config):
    """
    Production Configurations
    """
    DEBUG = False


app_config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig
}
