from templateframework.metadata import Metadata
import subprocess

def run(metadata: Metadata = None):
    source_dir_path = metadata.target_path.joinpath(metadata.inputs['source_dir'])
    infra_resource_path = metadata.target_path.joinpath('infra')

    subprocess.run(['npm', 'install'], cwd=infra_resource_path)
    subprocess.run(['npm', 'run', 'build'], cwd=infra_resource_path)
    subprocess.run(['npm', 'run', 'format:fix'], cwd=infra_resource_path)
    subprocess.run(['npm', 'run', 'cdk', 'synth'], cwd=infra_resource_path)

    subprocess.run(['npm', 'run', 'install'], cwd=source_dir_path)
    subprocess.run(['npm', 'run', 'build'], cwd=source_dir_path)
    return metadata
